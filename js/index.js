var app = new Vue({
  el: '#app',
  data: {
    characters: [
      'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'H', 'I', 'J', 'K',
      'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W',
      'X', 'Y', 'Z', 'Ż', 'Ź'
    ],
    word: 'BAŁKANY',
    maskedWord: '',
    counter: 8,
    wordLen: 0,
    status: {
      type: 'Type letter',
      win: 'Yes! You'+"'"+'ve guessed password!',
      lose: 'You'+"'"+'ve killed a man! Congratulations!'
    }
  },
  methods: {
    checkLetter: function(index){
      var isExisting = false;
      var i = 0;
      while(i < this.wordLen){
        if(this.characters[index] == this.word.charAt(i)){
          this.maskedWord = this.maskedWord.substr(0, i) + this.characters[index] + this.maskedWord.substr(i + 1);
          isExisting = true;
        }
        i++;
      }
      if(!isExisting){
        this.counter--;

      }else{

      }
      if(this.counter <= 1){
        this.maskedWord = this.word;
      }
    }
  },
  computed: {
    prepareWord: function(){
      this.maskedWord = '';
      this.wordLen = this.word.length;
      for(var i = 0; i < this.wordLen; i++){
        this.maskedWord += '_';
      }
    },
    restartGame: function(){
      this.counter = 8;
      this.prepareWord();
    }
  },
  beforeMount(){
    this.prepareWord();
  }
});
