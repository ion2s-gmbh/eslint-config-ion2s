<template>
    <div>
        <input v-model="name" type="text" @mouseover="doThings()">
        <input
            v-model="age"
            class="styled-input"
            type="text"
            @mouseover="doThings()"
        >
    </div>
</template>

<script>
export default {
    name: 'TestComponent',
    props: {
        greet: {
            type: String,
            default: 'Test',
        },
    },
    data () {
        return {
            name: '',
            age: 0,
        };
    },
    methods: {
        doThings () {
            console.log(`Hello ${this.name}`);
            return this.age;
        },
    },
};
</script>

<style scoped>
.styled-input {
    background-color: red;
}
</style>
