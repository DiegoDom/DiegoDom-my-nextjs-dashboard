"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlide";

interface Props {
  value?: number;
}

interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const resp = await fetch("/api/counter");
  const data: CounterResponse = await resp.json();

  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  /* useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]); */

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button onClick={() => dispatch(addOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]">
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          disabled={counter <= 0}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all w-[100px]"
        >
          -1
        </button>
      </div>
    </>
  );
};
