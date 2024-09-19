<script setup>
import { ref, reactive } from "vue";
import Input from "./Input.vue";
import Modifications from "./Modifications.vue";
import { useApiRequestStore } from "@/stores/ApiRequestStore";


const api_req_store = useApiRequestStore();

// api connection when user clicks on a button from <Input/>
const http = new XMLHttpRequest();
const api_key = "7f7b330d0d2244b69c4b0ceb7035dc01";
const onHandleClickInput = (received_input) => {
    const url = `http://api.voicerss.org/?key=${api_key}&hl=${api_req_store.language}&r=${api_req_store.speed}&c=${api_req_store.audio_codeck}&f=${api_req_store.audio_format}&src=${received_input}`;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        api_req_store.audioUrl = http.responseURL;
    }
    api_req_store.text = received_input;
    addLog();
    setCookie(logs);
}

// creating logs for adding to cookie
const addLog = () => {
    const log = `${api_req_store.text} (язык - ${api_req_store.language}, формат - ${api_req_store.audio_codeck}, битрейт - ${api_req_store.audio_format}, скорость - ${api_req_store.speed}`;
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

// @logs - reactive-object, logs when updating the page
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
                <Modifications />
                <audio controls :src="api_req_store.audioUrl"></audio>
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

.logs-size::-webkit-scrollbar{
    width: 10px;
}

.logs-size::-webkit-scrollbar-track {
    background-color: rgb(58, 58, 58);
    border-radius: 5px;
}

.logs-size::-webkit-scrollbar-thumb {
    background-color: rgb(0, 126, 215);
    border-radius: 5px;
}

.logs-size::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 125, 215, 0.7);
}
</style>