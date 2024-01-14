import { writable } from "svelte/store";

export const tabIndex = writable(1);
export const q1 = writable({});

q1.subscribe((value) => {
  console.log(value);
});
