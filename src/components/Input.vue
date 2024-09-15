<script setup>
import { ref } from 'vue'

const input = ref("");

const inputHandle = (e) => {
    input.value = e.target.value;
};

</script>

<template>
    <div class="input__container">
        <label for="">Текст</label>
        <input @input="inputHandle" />
        <button @click="$emit('handleClickInput', input)">Отправить</button>
    </div>
</template>

<style lang="css">
.input__container {
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.input__container label {
    font-size: 20px;
}

.input__container input {
    all: unset;
    background-color: rgb(58, 58, 58);
    padding: 10px;
    border-radius: 5px;
}

.input__container button{
    all: unset;
    cursor: pointer;
    background-color: rgb(0, 126, 215);
    padding: 10px;
    border-radius: 5px;
}
.input__container button:hover{
    transform: scale(1.03);
    transition: all 0.1s ease;
}
</style>