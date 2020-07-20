//corpuses required

var corpus_one =['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.']

var corpus_two =['A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'];

var corpus_three =['A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.']

var corpus = " ";
var corpus_selected = " ";

//displaying the main experiment

 function expdisp(){
	
    corpus = document.getElementById('corpus-selection').options[document.getElementById('corpus-selection').selectedIndex].text;
    if(corpus === "----Select a corpus----"){
        alert('Select a Corpus');
        return false;
    }
    else if(corpus === "Corpus 1" ){

        corpus_selected = corpus;
        document.getElementById("cdisplay").innerHTML = corpus_one;
        document.getElementById("second-msg").innerHTML="Enter the number of tokens and types for the above corpus:"
        document.getElementById("table-display").style.display = "inline";
        document.getElementById("submit-button").style.display = "inline";
        document.getElementById("input1").value ="";
        document.getElementById("input2").value ="";
        document.getElementById("input1").style.background = "transparent";
        document.getElementById("input2").style.background = "transparent";
        document.getElementById("right-wrong").innerHTML = " ";
        document.getElementById("continue-button").style.display = "none";
        document.getElementById("third-msg").innerHTML = " ";
        document.getElementById("third-input").style.display = "none";
        document.getElementById("input3").value ="";
        document.getElementById("submit-button").onclick = function(){ compare_tokens_and_types(corpus_one[0])};

           
    }
     else if(corpus === "Corpus 2" ){

        corpus_selected = corpus;
        document.getElementById("cdisplay").innerHTML = corpus_two;
        document.getElementById("second-msg").innerHTML="Enter the number of tokens and types for the above corpus:"   
        document.getElementById("table-display").style.display = "inline";
        document.getElementById("submit-button").style.display = "inline";
         document.getElementById("input1").value ="";
        document.getElementById("input2").value ="";
        document.getElementById("input1").style.background = "transparent";
        document.getElementById("input2").style.background = "transparent";
        document.getElementById("right-wrong").innerHTML = " ";
        document.getElementById("continue-button").style.display = "none";
        document.getElementById("third-msg").innerHTML = " ";
        document.getElementById("third-input").style.display = "none";
        document.getElementById("input3").value ="";
        document.getElementById("submit-button").onclick = function(){compare_tokens_and_types(corpus_two[0])};
    }
     else if(corpus === "Corpus 3" ){

        corpus_selected = corpus;
        document.getElementById("cdisplay").innerHTML = corpus_three;
        document.getElementById("second-msg").innerHTML="Enter the number of tokens and types for the above corpus:"  
        document.getElementById("table-display").style.display = "inline"; 
        document.getElementById("submit-button").style.display = "inline";
         document.getElementById("input1").value ="";
        document.getElementById("input2").value ="";
        document.getElementById("input1").style.background = "transparent";
        document.getElementById("input2").style.background = "transparent";
        document.getElementById("right-wrong").innerHTML = " ";
        document.getElementById("continue-button").style.display = "none";
        document.getElementById("third-msg").innerHTML = " ";
        document.getElementById("third-input").style.display = "none";
        document.getElementById("input3").value ="";
        document.getElementById("submit-button").onclick = function(){compare_tokens_and_types(corpus_three[0])};
    }
}  

//comaparing tokens and types

function compare_tokens_and_types(corp)
{
    document.getElementById("right-wrong").style.display = "none";
    var token_count = count_tokens(corp);
    var type_count = count_types(corp);
    var given_token_count = (document.getElementById("input1").value);
    var given_type_count  = (document.getElementById("input2").value);
    var validate1 = given_token_count.match(/^[0-9]+$/);
    var validate2 = given_type_count.match(/^[0-9]+$/);
    var given_token_count2 = parseInt(given_token_count);
    var given_type_count2  = parseInt(given_type_count);

        if(given_token_count = "" || given_type_count == "" )
        {
            alert("Enter number of tokens and types");
        }
        
        else if ( (validate1 == null) || (validate2 == null))
        {
            alert("please enter numeric value only.");
        }
        else if(given_token_count2 == token_count && given_type_count2 == type_count)
        {

            document.getElementById("input1").style.background = "green";
            document.getElementById("input2").style.background = "green";
            document.getElementById("right-wrong").innerHTML = "Correct answer!!!"
            document.getElementById("right-wrong").style.color = "green";
            document.getElementById("right-wrong").style.display ="inline";
            document.getElementById("continue-button").style.display ="inline";
        }
        else
       {
         
         if(given_token_count2 == token_count)
        {
            document.getElementById("input1").style.background = "green";
        }
         if(given_token_count2 !== token_count)
        {
            document.getElementById("input1").style.background = "red";
        }
          if(given_type_count2 == type_count)
        {
            document.getElementById("input2").style.background = "green";
        }
        if(given_type_count2 !== type_count)
        {
            document.getElementById("input2").style.background = "red";
        }
       document.getElementById("right-wrong").innerHTML = "Wrong answer!!!"
       document.getElementById("right-wrong").style.color = "red";
       document.getElementById("right-wrong").style.display ="inline";
       document.getElementById("continue-button").style.display ="none";


       }
}

//counting tokens in the corpus

function count_tokens(corp)
{
   var str = corp; 
  //removing all extra characters except words and spaces from the corpus
  str= str.replace(/[^\w\s]|_/g, "");
  str = str.replace(/\s+/g, " ");

// spliting and counting the words in the corpus
  var count = str.split(" ").length;

  return count;

}

//counting types in the corpus

function count_types(corp)
{
   var str=corp;
 //removing all extra characters except words and spaces from the corpus
   str= str.replace(/[^\w\s]|_/g, "")
   str =  str.replace(/\s+/g, " ");

 // spliting and counting the words in the corpus
   str=str.split(" ");

 //converting to lowercase and spliting
   str=str.join('|').toLowerCase().split('|');

 //removing duplicates from the corpus
  str = removeDuplicates(str);
  //calling the function and returning the length
   count = str.length;
    
   return count;
}

    function removeDuplicates(data)
   {
     str = data.filter((value,index) => data.indexOf(value) === index );
      return str;
   }

 function compare_stem_word()
 {

      document.getElementById("submit-button").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("right-wrong").style.display = "none";
      document.getElementById("third-msg").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types:";
      document.getElementById("third-input").style.display = "inline";

 }