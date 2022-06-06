/** @format */

import { race, delay } from "redux-saga/effects";
import { client } from "../lib/client";

export function* proFetch(query) {
  const { data, timeout } = yield race({
    data: client.fetch(query),
    timeout: delay(8000),
  });
  return { data, timeout };
}

export const fetchTimeout = new Error("Fetch takes too long");
