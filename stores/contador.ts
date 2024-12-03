import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
        message: "TreinaWeb",
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 0) this.count--;
        },
        updateMessage(newMessage: string) {
            this.message = newMessage;
        },
    },

    getters: {
        doubleCount: (state) => state.count * 2,
        messageLength: (state) => state.message.length,
    },
});
