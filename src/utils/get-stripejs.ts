import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.PUB_KEY!);
  }
  return stripePromise;
};

export default getStripe;