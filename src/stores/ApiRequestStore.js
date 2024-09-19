import { defineStore } from 'pinia'


export const useApiRequestStore = defineStore('ApiRequestStore', {
    state: () => {
        return {
            text: "",
            audioUrl: "",
            language: "en-gb",
            voice: "",
            audio_codeck: "MP3",
            audio_format: "8khz_8bit_mono",
            speed: "0"
        }
    }
})