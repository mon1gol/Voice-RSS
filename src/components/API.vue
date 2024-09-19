<script setup>
import { ref, reactive } from "vue";
import Input from "./Input.vue";
import apiData from "../data/api_data.json";


const language = ref(apiData.language);
const audio_codecks = ref(apiData.audio_codecks);
const audio_formats = ref(apiData.audio_formats);

// api connection when user clicks on a button from <Input/>
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
    setCookie(logs);
}

// creating logs for adding to cookie
const addLog = () => {
    const log = `${result.text} (язык - ${result.lang}, формат - ${result.audio_codeck}, битрейт - ${result.audio_format}, скорость - ${result.speed}`;
    const log_date = new Date();
    logs.push({
        log: log,
        date: log_date.toString()
    });
}

// cookie methods
const setCookie = (logs, options = {}) => {
    options = {
        path: '/'
    };

    let updatedCookie = 'logs' + "=" + JSON.stringify(logs);
    document.cookie = updatedCookie;
}
const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(matches[1]) : undefined;
}

// @result - reactive-object for api-requests
// @logs - reactive-object, logs when updating the page
const result = reactive({
    text: "",
    audioUrl: "",
    lang: "en-gb",
    voice: "",
    audio_codeck: "MP3",
    audio_format: "8khz_8bit_mono",
    speed: "0"
})
const logs = reactive(
    []
)
const cookie_logs = getCookie('logs');
if (cookie_logs != undefined) {
    cookie_logs.map(item => {
        logs.push({
            log: item.log,
            date: item.date
        })
    });
}
</script>

<template>
    <div class="position">
        <div class="api">
            <div class="api__modifications">
                <label for="title">Настройки</label>
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
                <audio controls :src="result.audioUrl"></audio>
            </div>
            <div class="api__modifications">
                <Input @handleClickInput="onHandleClickInput" />
            </div>
            <div class="api__modifications logs-size">
                <label for="title">История</label>
                <div v-for="log in logs">{{ log.log }} {{ ": " + log.date }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.position {
    margin-top: 50px;
}

.api {
    display: flex;
    flex-direction: row;
    margin: 0 5%;
}

.api__modifications {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 33%;
    margin-left: 20px;
    margin-right: 20px;
}

.api__modifications-container {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.api__modifications-container select {
    all: unset;
    background-color: rgb(58, 58, 58);
    border-radius: 5px;
    padding: 10px;
}

.api__modifications-container select:hover,
input[id="speed"]:hover {
    transform: scale(1.03);
    transition: all 0.1s ease;
}

audio {
    width: 100%;
    height: 250px;
}

.api__modifications label[for='title'] {
    position: relative;
    font-size: 20px;
    font-weight: bold;
}

label[for='title'] {
    text-align: center;
}

.logs-size {
    max-height: 90vh;
    overflow-y: auto;
}

.api__modifications-container select::-webkit-scrollbar,
.logs-size::-webkit-scrollbar {
    width: 10px;
}

.api__modifications-container select::-webkit-scrollbar,
.logs-size::-webkit-scrollbar-track {
    background-color: rgb(58, 58, 58);
    border-radius: 5px;
}

.logs-size::-webkit-scrollbar-thumb {
    background-color: rgb(0, 126, 215);
    ;
    border-radius: 5px;
}

.logs-size::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 125, 215, 0.7);
}
</style>