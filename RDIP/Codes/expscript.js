//corpus requirements included.

var answers = '{"English":['+
    '{"s1":"John ate an apple before afternoon", "s2":"before afternoon John ate an apple", "s3":"John before afternoon ate an apple"},' +
    '{"s1":"some students like to study in the night", "s2":"at night some students like to study"},' +
    '{"s1":"John and Mary went to church", "s2":"Mary and John went to church"},'+
    '{"s1":"John went to church after eating", "s2":"after eating John went to church","s3":"John after eating went to church"},' +
    '{"s1":"did he go to market", "s2":"he did go to market"},' +
    '{"s1":"the woman who called my sister sells cosmetics", "s2":"the woman who sells cosmetics called my sister",'+
        '"s3":"my sister who sells cosmetics called the woman", "s4":"my sister who called the woman sells cosmetics"},'+
    '{"s1":"John goes to the library and studies", "s2":"John studies and goes to the library"},'+
    '{"s1":"John ate an apple so did she", "s2":"she ate an apple so did John"},'+
    '{"s1":"the teacher returned the book after she noticed the error", "b":"the teacher noticed the error after she returned the book",'+
        '"s3":"after the teacher returned the book she noticed the error", "s4":"after the teacher noticed the error she returned the book",'+
        '"s5":"she returned the book after the teacher noticed the error", "s6":"she noticed the error after the teacher returned the book",'+
        '"s7":"after she returned the book the teacher noticed the error", "s8":"after she noticed the error the teacher returned the book"},'+
    '{"s1":"I told her that I bought a book yesterday", "s2":"I told her yesterday that I bought a book", "s3":"yesterday I told her that I bought a book",'+
        '"s4":"I bought a book that I told her yesterday", "s5":"I bought a book yesterday that I told her", "s6":"yesterday I bought a book that I told her"}],'+
    
    '"Hindi":[' +
    '{"s1":"राम और श्याम बाजार गयें", "s2":"राम और श्याम गयें बाजार", "s3":"बाजार गयें राम और श्याम", "s4":"गयें बाजार राम और श्याम"},'+
    '{"s1":"राम सोया और श्याम भी", "s2":"श्याम सोया और राम भी", "s3":"सोया श्याम और राम भी", "s4":"सोया राम और श्याम भी"},'+
    '{"s1":"मैंने उसे बताया कि राम सो रहा है", "s2":"मैंने उसे बताया कि सो रहा है राम", "s3":"उसे मैंने बताया कि राम सो रहा है", "s4":"उसे मैंने बताया कि सो रहा है राम",'+
        '"s5":"मैंने बताया उसे कि राम सो रहा है", "s6":"मैंने बताया उसे कि सो रहा है राम", "s7":"उसे बताया मैंने कि राम सो रहा है", "s8":"उसे बताया मैंने कि सो रहा है राम",'+
        '"s9":"बताया मैंने उसे कि राम सो रहा है", "s10":"बताया मैंने उसे कि सो रहा है राम", "s11":"बताया उसे मैंने कि राम सो रहा है", "s12":"बताया उसे मैंने कि सो रहा है राम"},'+
    '{"s1":"राम खाकर सोया", "s2":"खाकर राम सोया", "s3":"राम सोया खाकर", "s4":"खाकर सोया राम", "s5":"सोया राम खाकर", "s6":"सोया खाकर राम"},'+
    '{"s1":"बिल्लियों को मारकर कुत्ता सो गया", "s2":"मारकर बिल्लियों को कुत्ता सो गया", "s3":"बिल्लियों को मारकर सो गया कुत्ता", "s4":"मारकर बिल्लियों को सो गया कुत्ता",'+
        '"s5":"कुत्ता सो गया बिल्लियों को मारकर", "s6":"कुत्ता सो गया मारकर बिल्लियों को", "s7":"सो गया कुत्ता बिल्लियों को मारकर", "s8":"सो गया कुत्ता मारकर बिल्लियों को"},'+
    '{"s1":"एक लाल किताब वहाँ है", "s2":"एक लाल किताब है वहाँ", "s3":"वहाँ है एक लाल किताब", "s4":"है वहाँ एक लाल किताब"},'+
    '{"s1":"एक बड़ी सी किताब वहाँ है", "s2":"एक बड़ी सी किताब है वहाँ", "s3":"बड़ी सी एक किताब वहाँ है", "s4":"बड़ी सी एक किताब है वहाँ", "s5":"वहाँ है एक बड़ी सी किताब",'+
        '"s6":"वहाँ है बड़ी सी एक किताब", "s7":"है वहाँ एक बड़ी सी किताब", "s8":"है वहाँ बड़ी सी एक किताब"}]}';   

var language = " ";
var sentence = JSON.parse(answers);
var random_sentence = " ";
var question = 0;
var shuffle_arr;


function expdisplay(){
	document.getElementById("exp-buttons").innerHTML = " ";
    language = document.getElementById('language').options[document.getElementById('language').selectedIndex].text;
    if(language == "----Select Language----"){
        alert('Select a Language');
        return false;
    }
    else if(language == "English" || language == "Hindi"){
        document.getElementById("desc-head").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("desc-tag").innerHTML = "(select the buttons in proper order)";
        select_sentence(language);
    }
}

function select_sentence(language)
{
	var arr;

      if(language == "English")
      {
         question = Math.floor(Math.random()*10);
        random_sentence = sentence.English[question].s1;
        arr = random_sentence.split(" ");
        shuffle_arr = shuffle(arr);
        buttons_add(shuffle_arr);
      }
      else if(language == "Hindi")
      {
         question = Math.floor(Math.random()*7);
         random_sentence = sentence.Hindi[question].s1;
         arr = random_sentence.split(" ")
         shuffle_arr = shuffle(arr);
         buttons_add(shuffle_arr);


      }
}  

function shuffle(arr)
{
	
    var i,j,k;
    for(i = 0;i<arr.length;i++)
    {
        j = Math.floor(Math.random()*(i+1))
        k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;

    }
    return arr;
 }

 function buttons_add(array)
 {
    for(i=0;i<array.length;i++)
    {
    	var k =1;

        var button = document.createElement("BUTTON");
        button.setAttribute("id",k);
        button.setAttribute("style","background-color:white;text-align:center;padding:10px;margin:10px;align:center;margin-left:50px;cursor:pointer;")
        button.setAttribute("value",array[i]);
        button.innerHTML = array[i];
        document.getElementById("exp-buttons").appendChild(button);


    }	
     


 }








