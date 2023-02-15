import { Tab } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useState, useEffect } from "react";
import Image from "next/image";
import visaPng from "images/vis.png";
import mastercardPng from "images/mastercard.svg";
import Input from "shared/Input/Input";
import Label from "components/Label/Label";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import NcModal from "shared/NcModal/NcModal";
import ModalSelectDate from "components/ModalSelectDate";
import moment from "moment";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import converSelectedDateToString from "utils/converSelectedDateToString";
import ModalSelectGuests from "components/ModalSelectGuests";
import { GuestsObject } from "components/HeroSearchForm2Mobile/GuestsInput";
import LocationInput from "components/HeroSearchForm/LocationInput";
// import airplaneTicket from "../../images/avatars/"



import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);



export interface CheckOutPageProps {
  className?: string;
}


const CheckOutPage: FC<CheckOutPageProps> = ({ className = "" }) => {
  const [rangeDates, setRangeDates] = useState<DateRage>({
    startDate: moment().add(1, "day"),
    endDate: moment().add(5, "days"),
  });
  const [guests, setGuests] = useState<GuestsObject>({
    guestAdults: 2,
    guestChildren: 1,
    guestInfants: 1,
  });

  const defaultPickUpInputValue = "City, Singapore";
  const defaultDropOffInputValue = "Tokyo, Japan";

  const [price, setPrice] = useState(0);
  const [airline, setAirline] = useState("");
  const [pickUpInputValue, setPickUpInputValue] = useState("");
  const [dropOffInputValue, setDropOffInputValue] = useState("");
  useEffect(() => {
    let ticketDets = JSON.parse(localStorage.getItem('checkoutDets')!);
    const currentDates = JSON.parse(localStorage.getItem("currentDates")!)
    console.log(currentDates);
    setRangeDates({
      startDate: moment(currentDates.startDate),
      endDate: moment(currentDates.endDate),
    });
    setPrice(ticketDets.price);
    setAirline(ticketDets.airline);
    setPickUpInputValue(defaultPickUpInputValue);
    setDropOffInputValue(defaultDropOffInputValue);
    console.log(JSON.parse(localStorage.getItem('checkoutDets')!))
  }, [])


  const renderSidebar = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl lg:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 px-0 sm:p-6 xl:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-40">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
              <Image src={require("../../images/airplane-ticket.png")} alt="Ticket" />
              {/* <NcImage src={require("../../images/airplane-ticket.png")} /> */}
            </div>
          </div>
          <div className="py-5 sm:px-5 space-y-3">
            <div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                Tokyo, Japan - City Singapore
              </span>
              <span className="text-base font-medium mt-1 block">
                {airline}
              </span>
            </div>
            <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
              1x Ticket(s)
            </span>
            <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
            {/* <StartRating /> */}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold">Price detail</h3>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Ticket Cost</span>
            <span>${price}</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            {/* <span>Service charge</span>
            <span>$0</span> */}
          </div>

          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderMain = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');



    const handleSubmit = async (event: any) => {
      event.preventDefault();
      const elements = useElements();
      const stripe = await stripePromise;

      if (!stripe || !elements) {
        console.log('stripe or elements is null');
        return;
      }

      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        console.log('cardElement is null');
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.log('[error]', error);
      }
      else {
        console.log('[PaymentMethod]', paymentMethod);

        const { id } = paymentMethod;

        try {
          const { data } = await axios.post('/api/pay', {
            id,
            amount: price * 100,
          });
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    }


    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Confirm and payment
        </h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <div>
            <h3 className="text-2xl font-semibold">Your Flight</h3>
            <div className="flex flex-1">
              <LocationInput
                defaultValue={pickUpInputValue}
                placeHolder="Flying from"
                desc="Where do you want to fly from?"
                disabled
              />
              <LocationInput
                defaultValue={dropOffInputValue}
                placeHolder="Flying To"
                desc="Where do you want to fly to?"
                disabled
              />
            </div>


            <NcModal
              renderTrigger={(openModal) => (
                <span
                  onClick={() => openModal()}
                  className="block lg:hidden underline  mt-1 cursor-pointer"
                >
                  View booking details
                </span>
              )}
              renderContent={renderSidebar}
              modalTitle="Booking details"
            />
          </div>

          <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">
            <ModalSelectDate
              defaultValue={rangeDates}
              onSelectDate={setRangeDates}
              renderChildren={({ openModal }) => (
                <button
                  // onClick={openModal}
                  className="text-left flex-1 p-5 flex justify-between space-x-5 "
                  type="button"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-neutral-400">Dates</span>
                    <span className="mt-1.5 text-lg font-semibold">
                      {converSelectedDateToString(rangeDates)}
                    </span>
                  </div>
                  {/* <PencilSquareIcon className="w-6 h-6 text-neutral-6000 dark:text-neutral-400" /> */}
                </button>
              )}
            />


          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Pay with</h3>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

          <div className="mt-6">
            <Tab.Group>
              <Elements stripe={stripePromise}>
                  <Tab.List className="flex my-5">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${selected
                            ? "bg-neutral-800 dark:bg-neutral-300 text-white dark:text-neutral-900"
                            : "text-neutral-6000 dark:text-neutral-400"
                            }`}
                        >
                          Credit Card
                        </button>
                      )}
                    </Tab>
                  </Tab.List>

                  <Tab.Panels>
                    <Tab.Panel className="space-y-5">
                      <div className="space-y-1">
                        <Label>Card number </Label>
                        <Input defaultValue="111 112 222 999"
                          onChange={(e) => setCardNumber(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label>Card holder </Label>
                        <Input defaultValue="JOHN DOE"
                          onChange={(e) => setCardHolder(e.target.value)}
                        />
                      </div>
                      <div className="flex space-x-5  ">
                        <div className="flex-1 space-y-1">
                          <Label>Expiration date </Label>
                          <Input type="date" defaultValue="MM/YY"
                            onChange={(e) => setExpDate(e.target.value)}
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <Label>CVC </Label>
                          <Input
                            onChange={(e) => setCvv(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label>Messager for author </Label>
                        <Textarea placeholder="..." />
                        <span className="text-sm text-neutral-500 block">
                          Write a few sentences about yourself.
                        </span>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel className="space-y-5">
                      <div className="space-y-1">
                        <Label>Email </Label>
                        <Input type="email" defaultValue="example@gmail.com" />
                      </div>
                      <div className="space-y-1">
                        <Label>Password </Label>
                        <Input type="password" defaultValue="***" />
                      </div>
                      <div className="space-y-1">
                        <Label>Messager for author </Label>
                        <Textarea placeholder="..." />
                        <span className="text-sm text-neutral-500 block">
                          Write a few sentences about yourself.
                        </span>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                <div className="pt-8">
                  <ButtonPrimary 
                  href="/pay-done"
                  >Confirm and pay</ButtonPrimary>
                </div>

              </Elements>
            </Tab.Group>
          </div>
        </div>
      </div >
    );
  };

  return (
    <div className={`nc-CheckOutPage ${className}`} data-nc-id="CheckOutPage">
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
        <div className="hidden lg:block flex-grow">{renderSidebar()}</div>
      </main>
    </div>
  );
};

export default CheckOutPage;
