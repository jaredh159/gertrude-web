import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FullscreenModalForm } from '@dash/components';
import type React from 'react';
// import { useDispatch } from '../../redux/hooks';
// import { handleSignupPaymentCanceled } from '../../redux/slice-signup';

const CheckoutCancel: React.FC = () => null;
// const [params] = useSearchParams();
// const dispatch = useDispatch();
// const sessionId = params.get(`session_id`) ?? ``;

// useEffect(() => {
//   dispatch(handleSignupPaymentCanceled({ stripeCheckoutSessionId: sessionId }));
// }, [dispatch, sessionId]);

// return (
//   <FullscreenModalForm
//     request="failed"
//     error="Checkout process cancelled. Please contact support if this was not your intention, or if you are having any kind of trouble signing up."
//   />
// );
export default CheckoutCancel;
