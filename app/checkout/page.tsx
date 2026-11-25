'use client';

import { useState } from 'react';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowLeft, ArrowRight, CreditCard, MapPin, Truck, CheckCircle, Package, Wallet } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';
import emailjs from '@emailjs/browser';

type CheckoutStep = 'shipping' | 'payment' | 'confirmation' | 'success';
type PaymentMethod = 'card' | 'cash';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
  phone: string;
}

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [orderNumber] = useState(Math.random().toString(36).substr(2, 9).toUpperCase());
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (currentStep === 'shipping') setCurrentStep('payment');
    else if (currentStep === 'payment') setCurrentStep('confirmation');
  };

  const handlePrevStep = () => {
    if (currentStep === 'payment') setCurrentStep('shipping');
    else if (currentStep === 'confirmation') setCurrentStep('payment');
  };

  const sendOrderConfirmationEmail = async () => {
    try {
      const orderItems = cart.map(item => 
        `${item.product.name} (${item.quantity}x) - BDT ${(item.product.price * item.quantity).toFixed(2)}`
      ).join('\n');

      const templateParams = {
        to_name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
        order_number: orderNumber,
        order_items: orderItems,
        total_amount: total.toFixed(2),
        shipping_address: `${shippingInfo.address1}, ${shippingInfo.address2}, ${shippingInfo.city}, ${shippingInfo.postalCode}`,
        payment_method: paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast.success('Order confirmation email sent!');
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send order confirmation email');
    }
  };

  const handlePlaceOrder = async () => {
    await sendOrderConfirmationEmail();
    clearCart();
    setCurrentStep('success');
  };

  if (currentStep === 'success') {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-muted-foreground">
                Thank you for your purchase. We'll send you a confirmation email shortly.
              </p>
            </div>

            <div className="border-t border-b py-6 my-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <Package className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      BDT {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span>BDT {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Payment Method</span>
                    <span>{paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Link href="/">
                <Button className="w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Order number: #{orderNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Checkout Steps */}
      <div className="flex justify-between items-center mb-8">
        <div className={`flex-1 text-center ${currentStep === 'shipping' ? 'text-primary' : 'text-muted-foreground'}`}>
          <MapPin className="mx-auto h-6 w-6 mb-2" />
          <span>Shipping</span>
        </div>
        <div className={`flex-1 text-center ${currentStep === 'payment' ? 'text-primary' : 'text-muted-foreground'}`}>
          <CreditCard className="mx-auto h-6 w-6 mb-2" />
          <span>Payment</span>
        </div>
        <div className={`flex-1 text-center ${currentStep === 'confirmation' ? 'text-primary' : 'text-muted-foreground'}`}>
          <Truck className="mx-auto h-6 w-6 mb-2" />
          <span>Confirmation</span>
        </div>
      </div>

      {/* Step Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {currentStep === 'shipping' && (
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    name="firstName"
                    value={shippingInfo.firstName}
                    onChange={handleShippingInfoChange}
                  />
                  <Input 
                    placeholder="Last Name"
                    name="lastName"
                    value={shippingInfo.lastName}
                    onChange={handleShippingInfoChange}
                  />
                </div>
                <Input 
                  placeholder="Address Line 1"
                  name="address1"
                  value={shippingInfo.address1}
                  onChange={handleShippingInfoChange}
                />
                <Input 
                  placeholder="Address Line 2"
                  name="address2"
                  value={shippingInfo.address2}
                  onChange={handleShippingInfoChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="City"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleShippingInfoChange}
                  />
                  <Input 
                    placeholder="Postal Code"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleShippingInfoChange}
                  />
                </div>
                <Input 
                  placeholder="Phone Number"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleShippingInfoChange}
                />
              </div>
            </div>
          )}

          {currentStep === 'payment' && (
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={(value: PaymentMethod) => setPaymentMethod(value)}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 border rounded-lg p-4">
                    <RadioGroupItem value="card" id="card" />
                    <label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Credit Card</p>
                        <p className="text-sm text-muted-foreground">Pay securely with your credit card</p>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center space-x-4 border rounded-lg p-4">
                    <RadioGroupItem value="cash" id="cash" />
                    <label htmlFor="cash" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Wallet className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Cash on Delivery</p>
                        <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                      </div>
                    </label>
                  </div>
                </div>
              </RadioGroup>
              
              {paymentMethod === 'card' && (
                <div className="mt-6 space-y-4">
                  <Input placeholder="Card Number" />
                  <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="MM/YY" />
                    <Input placeholder="CVC" />
                  </div>
                  <Input placeholder="Cardholder Name" />
                </div>
              )}
            </div>
          )}

          {currentStep === 'confirmation' && (
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">BDT {(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-card p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>BDT {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            {currentStep === 'confirmation' && (
              <div className="flex justify-between text-sm">
                <span>Payment Method</span>
                <span>{paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'}</span>
              </div>
            )}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>BDT {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep !== 'shipping' && (
          <Button onClick={handlePrevStep} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        )}
        {currentStep === 'shipping' && (
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Button>
          </Link>
        )}
        {currentStep !== 'confirmation' ? (
          <Button onClick={handleNextStep} className="ml-auto">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handlePlaceOrder} className="ml-auto">
            Place Order <CreditCard className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}