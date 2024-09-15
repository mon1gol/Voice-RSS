<script setup>
import { ref, reactive } from "vue";
import Input from "./Input.vue";


const language = ref([
    { lang: "Arabic (Egypt)", lang_key: "ar-eg" },
    { lang: "Arabic (Saudi Arabia)", lang_key: "ar-sa" },
    { lang: "Bulgarian", lang_key: "bg-bg" },
    { lang: "Catalan", lang_key: "ca-es" },
    { lang: "Chinese (China)", lang_key: "zh-cn" },
    { lang: "Chinese (Hong Kong)", lang_key: "zh-hk" },
    { lang: "Chinese (Taiwan))", lang_key: "zh-tw" },
    { lang: "Croatian", lang_key: "hr-hr" },
    { lang: "Czech", lang_key: "cs-cz" },
    { lang: "Danish", lang_key: "da-dk" },
    { lang: "Dutch (Belgium)", lang_key: "nl-be" },
    { lang: "Dutch (Netherlands)", lang_key: "nl-nl" },
    { lang: "English (Australia)", lang_key: "en-au" },
    { lang: "English (Canada)", lang_key: "en-ca" },
    { lang: "English (Great Britain)", lang_key: "en-gb" },
    { lang: "English (India)", lang_key: "en-in" },
    { lang: "English (Ireland)", lang_key: "en-ie" },
    { lang: "English (United States)", lang_key: "en-us" },
    { lang: "Finnish", lang_key: "fi-fi" },
    { lang: "French (Canada)", lang_key: "fr-ca" },
    { lang: "French (France)", lang_key: "fr-fr" },
    { lang: "French (Switzerland)", lang_key: "fr-ch" },
    { lang: "German (Austria)", lang_key: "de-at" },
    { lang: "German (Germany)", lang_key: "de-de" },
    { lang: "German (Switzerland)", lang_key: "de-ch" },
    { lang: "Greek", lang_key: "el-gr" },
    { lang: "Hebrew", lang_key: "he-il" },
    { lang: "Hindi", lang_key: "hi-in" },
    { lang: "Hungarian", lang_key: "hu-hu" },
    { lang: "Indonesian", lang_key: "id-id" },
    { lang: "Italian", lang_key: "it-it" },
    { lang: "Japanese", lang_key: "ja-jp" },
    { lang: "Korean", lang_key: "ko-kr" },
    { lang: "Malay", lang_key: "ms-my" },
    { lang: "Norwegian", lang_key: "nb-no" },
    { lang: "Polish", lang_key: "pl-pl" },
    { lang: "Portuguese (Brazil)", lang_key: "pt-br" },
    { lang: "Portuguese (Portugal)", lang_key: "pt-pt" },
    { lang: "Romanian", lang_key: "ro-ro" },
    { lang: "Russian", lang_key: "ru-ru" },
    { lang: "Slovak", lang_key: "sk-sk" },
    { lang: "Slovenian", lang_key: "sl-si" },
    { lang: "Spanish (Mexico)", lang_key: "es-mx" },
    { lang: "Spanish (Spain)", lang_key: "es-es" },
    { lang: "Swedish", lang_key: "sv-se" },
    { lang: "Tamil", lang_key: "to-in" },
    { lang: "Thai", lang_key: "th-th" },
    { lang: "Turkish", lang_key: "tr-tr" },
    { lang: "Vietnamese", lang_key: "vi-vn" },
])

const audio_codecks = ref([
    { codeck: "MP3" },
    { codeck: "WAV" },
    { codeck: "AAC" },
    { codeck: "OGG" },
    { codeck: "CAF" }
]);

const audio_formats = ref([
    { audio_format: "8khz_8bit_mono" },
    { audio_format: "8khz_8bit_stereo" },
    { audio_format: "8khz_16bit_mono" },
    { audio_format: "8khz_16bit_stereo" },
    { audio_format: "11khz_8bit_mono" },
    { audio_format: "11khz_8bit_stereo" },
    { audio_format: "11khz_16bit_mono" },
    { audio_format: "11khz_16bit_stereo" },
    { audio_format: "12khz_8bit_mono" },
    { audio_format: "12khz_8bit_stereo" },
    { audio_format: "12khz_16bit_mono" },
    { audio_format: "12khz_16bit_stereo" },
    { audio_format: "16khz_8bit_mono" },
    { audio_format: "16khz_8bit_stereo" },
    { audio_format: "16khz_16bit_mono" },
    { audio_format: "16khz_16bit_stereo" },
    { audio_format: "22khz_8bit_mono" },
    { audio_format: "22khz_8bit_stereo" },
    { audio_format: "22khz_16bit_mono" },
    { audio_format: "22khz_16bit_stereo" },
    { audio_format: "24khz_8bit_mono" },
    { audio_format: "24khz_8bit_stereo" },
    { audio_format: "24khz_16bit_mono" },
    { audio_format: "24khz_16bit_stereo" },
    { audio_format: "32khz_8bit_mono" },
    { audio_format: "32khz_8bit_stereo" },
    { audio_format: "32khz_16bit_mono" },
    { audio_format: "32khz_16bit_stereo" },
    { audio_format: "44khz_8bit_mono" },
    { audio_format: "44khz_8bit_stereo" },
    { audio_format: "44khz_16bit_mono" },
    { audio_format: "44khz_16bit_stereo" },
    { audio_format: "48khz_8bit_mono" },
    { audio_format: "48khz_8bit_stereo" },
    { audio_format: "48khz_16bit_mono" },
    { audio_format: "48khz_16bit_stereo" },
    { audio_format: "alaw_8khz_mono" },
    { audio_format: "alaw_8khz_stereo" },
    { audio_format: "alaw_11khz_mono" },
    { audio_format: "alaw_11khz_stereo" },
    { audio_format: "alaw_22khz_mono" },
    { audio_format: "alaw_22khz_stereo" },
    { audio_format: "alaw_44khz_mono" },
    { audio_format: "alaw_44khz_stereo" },
    { audio_format: "ulaw_8khz_mono" },
    { audio_format: "ulaw_8khz_stereo" },
    { audio_format: "ulaw_11khz_mono" },
    { audio_format: "ulaw_11khz_stereo" },
    { audio_format: "ulaw_22khz_mono" },
    { audio_format: "ulaw_22khz_stereo" },
    { audio_format: "ulaw_44khz_mono" },
    { audio_format: "ulaw_44khz_stereo" }
])

const result = reactive({
    text: "",
    audioUrl: "",
    lang: "en-gb",
    voice: "",
    audio_codeck: "MP3",
    audio_format: "8khz_8bit_mono",
    speed: "0"
})

const logs = reactive([
    {}
])

const http = new XMLHttpRequest();
const api_key = "7f7b330d0d2244b69c4b0ceb7035dc01";

const onHandleClickInput = (received_input) => {
    const url = `http://api.voicerss.org/?key=${api_key}&hl=${result.lang}&r=${result.speed}&c=${result.audio_codeck}&f=${result.audio_format}&src=${received_input}`;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        result.audioUrl = http.responseURL;
    }
    result.text = received_input;
    addLog();
}

const addLog = () => {
    const log = `${result.text} (язык - ${result.lang}, формат - ${result.audio_codeck}, битрейт - ${result.audio_format}, скорость - ${result.speed}`;
    logs.push({log: log});
}
</script>

<template>
    <div class="position">
        <div class="api">
            <Input @handleClickInput="onHandleClickInput" />
            <div class="api__modifications">
                <div class="api__modifications-container">
                    <label>Выбрать язык:</label>
                    <select v-model="result.lang" value="English (Great Britain)">
                        <option v-for="item in language" :value="item.lang_key">
                            {{ item.lang }}
                        </option>
                    </select>
                </div>
                <div class="api__modifications-container">
                    <label>Выбрать аудио формат:</label>
                    <select v-model="result.audio_codeck" value="MP3">
                        <option v-for="item in audio_codecks" :value="item.codeck">
                            {{ item.codeck }}
                        </option>
                    </select>
                </div>
                <div class="api__modifications-container">
                    <label>Выбрать аудио битрейт:</label>
                    <select v-model="result.audio_format" value="8khz_8bit_mono">
                        <option v-for="item in audio_formats" :value="item.audio_format">
                            {{ item.audio_format }}
                        </option>
                    </select>
                </div>
                <div class="api__modifications-container">
                    <label for="speed">Задать скорость: {{ result.speed }}</label>
                    <input id="speed" type="range" min="-10" max="10" step="1" :value="result.speed"
                        @input="(e) => { result.speed = e.target.value }" />
                </div>
            </div>
            <audio controls :src="result.audioUrl"></audio>
        </div>
        <nav class="logs">
            <label for="">История</label>
            <div v-for="log in logs">{{log.log}}</div>
        </nav>
    </div>
</template>

<style lang="css">
.position {
    display: flex;
    justify-content: space-between;
  }
  
  .api {
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    flex-grow: 1;
  }
  
  .api__modifications {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    justify-items: end;
    gap: 50px;
  }
  
  .api__modifications-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .api__modifications-container select {
    all: unset;
    background-color: rgb(58, 58, 58);
    border-radius: 5px;
    padding: 10px;
  }
  
  audio {
    width: 100%;
    height: 250px;
  }
  
  .logs {
    background-color: rgb(58, 58, 58);
    padding: 10px;
    border-radius: 5px;
    width: 25%;
    max-height: 550px;
    overflow-y: auto;
    margin: 5% 5% 0 0;
  }
  
  .logs label {
    position: relative;
    font-size: 20px;
    font-weight: bold;
  }
</style>