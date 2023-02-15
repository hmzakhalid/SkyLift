import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
    apiVersion: '2020-08-27',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount, id } = req.body;

      const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        description: 'Airplane Ticket Payment',
        payment_method: id,
        confirm: true,
      });

      console.log(payment);

      res.status(200).json({ message: 'Payment successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Payment failed' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
