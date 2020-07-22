//corpus requirements

var english_sentences=['The child liked the chocolate','She was stopped by the bravest knight','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots'];

var hindi_sentences=['राम ने सीता के लिए फल तोड़ा','छोटे बच्चे पाठशाला जल्दी आयेंगे','मेहनत का फल मीठा होता है','वाह वह खूबसूरत है','पेड़ से पत्ते गिर गए'];

//added sellection lists
var sentence = " ";
var value1 = " ";
var user_pos_values = [];

 var docx = nlp("Roshith rao am so cool");
 //console.log(docx.data());

 console.log(docx.sentences().terms().out('array'));

 console.log(docx.sentences().terms().out('tags'));

 console.log(docx.nouns().terms().text())

 function expdisp(value)
 {
    
   if(value === "null"){
        alert('Select Language');
        return false;
    }
   
    else if(value === "English" )
    {
    	 
          value1 = value;
          document.getElementById("message").innerHTML = " ";
          document.getElementById("table-disp").innerHTML = " ";
          document.getElementById("submit-button").style.display = "none";
          var english_sen_selection='<select name="eng-sentences" id="eng-sen" onchange="display_sentence_table(this.value)"><option value="null">----Select Sentence----</option><option value="Esen1">The child liked the chocolate.</option><option value="Esen2">She was stopped by the bravest knight.</option><option value="Esen3">Mary baked a cake for his birthday</option><option value="Esen4">She decorated the cake carefully</option><option value="Esen5">Mary wore a dress with polka dots.</option>'
           
          document.getElementById("selection-list-two").innerHTML=english_sen_selection;
    }
    else if(value === "Hindi")
    {       
    	   
           value1 = value;
    	   document.getElementById("message").innerHTML = " ";
           document.getElementById("table-disp").innerHTML = " "; 
           document.getElementById("submit-button").style.display = "none";
           var hindi_sen_selection='<select name="hindi-sentences" id="hin-sen" onchange = "display_sentence_table(this.value)"><option value="null">----Select Sentence----</option><option value="Hsen1">राम ने सीता के लिए फल तोड़ा।</option><option value="Hsen2">छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value="Hsen3">मेहनत का फल मीठा होता है।</option><option value="Hsen4">वाह! वह खूबसूरत है।</option><option value="Hsen5">पेड़ से पत्ते गिर गए।</option>';
           document.getElementById("selection-list-two").innerHTML=hindi_sen_selection;  

    }       

 }

 function display_sentence_table(value)
 {
      document.getElementById("message").innerHTML = "Select the POS tag for corresponding words";
   if(value1 === "English")
   {

      if(value === "null")
      {
      	alert("Select a sentence")
      	return false;
      }
	  else if(value === "Esen1")
	  {
		sentence = english_sentences[0];
	  }	
	  else if(value === "Esen2")
	  {	
	  	sentence = english_sentences[1];
	  }	
      else if(value === "Esen3")
	  {
		sentence = english_sentences[2];
	  }	
	  else if(value === "Esen4")
	  {
	  	sentence = english_sentences[3];
	  }	
      else if(value === "Esen5")
	  {
		sentence = english_sentences[4];
	  }	
      
      sentence= sentence.replace("."," ");
      sentence=sentence.split(" ");
	  var col="<tr id='tablehead' style='color:brown'><td>LEXICON</td><td>POS</td><td></td><td></td><td></td></tr>";
	  for(var i = 0; i < sentence.length; i++){
		col = col +"<tr id='id"+i+"'><td>"+sentence[i]+"</td><td><select  id='posopt'><option value='Noun'>Noun</option><option value='Pronoun'>Pronoun</option><option value='Verb'>Verb</option><option value2='Adjective'>Adjective</option><option  value2 = 'Adverb'>Adverb</option><option value2='Determiner'>Determiner</option><option value2='Preposition'>Preposition</option><option value2='Conjunction'>Conjunction</option><option value2='Interjection'>Interjection</option></select></td><td></td><td></td><td></td></tr>";
	   user_pos_values[i] = "Noun"; //setting default user pos values as Noun
	 }
     
      document.getElementById("table-disp").innerHTML = col;
      document.getElementById("submit-button").style.display ="inline"; //displaying submit button below table

 	}
 	 if(value1 === "Hindi")
   {

      if(value === "null")
      {
      	alert("Select a sentence")
      	return false;
      }
	  if(value === "Hsen1")
	  {
		sentence = hindi_sentences[0];
	  }	
	  else if(value === "Hsen2")
	  {	
	  	sentence = hindi_sentences[1];
	  }	
      if(value === "Hsen3")
	  {
		sentence = hindi_sentences[2];
	  }	
	  else if(value === "Hsen4")
	  {
	  	sentence = hindi_sentences[3];
	  }	
      if(value === "Hsen5")
	  {
		sentence = hindi_sentences[4];
	  }	
      
      sentence= sentence.replace("."," ");
      sentence=sentence.split(" ");
	  var col="<tr id= 'tablehead' style='color:brown'><td>LEXICON</td><td>POS</td><td></td><td></td><td></td></tr>";
	  for(var i = 0; i < sentence.length; i++){
		col = col +"<tr id='id"+i+"'><td>"+sentence[i]+"</td><td><select  id='posopt'><option value = 'Noun'>Noun</option><option value='Pronoun'>Pronoun</option><option value='Verb'>Verb</option><option value='Adjective'>Adjective</option><option  value = 'Adverb'>Adverb</option><option value='Determiner'>Determiner</option><option value='Postposition'>Postposition</option><option value='Conjunction'>Conjunction</option><option value='Interjection'>Interjection</option></select></td><td></td><td></td><td></td></tr>";
	  
	   user_pos_values[i] = "Noun"; //setting default user pos values as Noun

	   }
     
      document.getElementById("table-disp").innerHTML = col;
      document.getElementById("submit-button").style.display ="inline"; //displaying submit button below table


 	}
 	
    console.log(user_pos_values);
 }