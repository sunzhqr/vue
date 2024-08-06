const App = {
    data() { //from js(vue) to html
        return {
            title: "Pins list",
            placeholderString: "Input the title for pin",
            inputValue: "",
            notes: [],
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue.trim()) {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        Upper(item) {
            return item.toUpperCase()
        },
        deleteNode(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        totalByTwo() {
            console.log("totalByTwo")
            return this.notes.length * 2
        },
        headingStyle() {
            if (this.inputValue.length<5) {
                return 'red'
            } else if (this.inputValue.length<10) {
                return 'green'
            }
            return 'blue'
        },
        forFont() {
            if (this.inputValue.length<5) {
                return '1rem'
            } else if (this.inputValue.length<10) {
                return '1.5rem'
            }
            return '2rem'
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 20) {
                this.inputValue = ''
            }
            console.log('inputValue changed', value)
        },
    },
}

Vue.createApp(App).mount('#app')

