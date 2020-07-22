//corpus requirements

var english_sentences=['The child liked the chocolate','She was stopped by the bravest knight','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots'];

var hindi_sentences=['राम ने सीता के लिए फल तोड़ा','छोटे बच्चे पाठशाला जल्दी आयेंगे','मेहनत का फल मीठा होता है','वाह वह खूबसूरत है','पेड़ से पत्ते गिर गए'];

//added sellection lists
var sentence = " ";
var value1 = " ";
var user_pos_values = [];
var english_actual_ans_values = [];
var hindi_actual_ans_values = [];
var j = 0;

 //var docx = nlp("bravest");
 //console.log(docx.data());

 //console.log(docx.sentences().terms().out('array'));

 //console.log(docx.sentences().out('tags'));

 //console.log(docx.nouns().terms().text())

 function expdisp(value)
 {
    
   if(value === "null"){
        alert('Select Language');
        return false;
    }
   
    else if(value === "English" )
    {
    	 
          value1 = value;
          j =0;
          document.getElementById("message").innerHTML = " ";
          document.getElementById("table-disp").innerHTML = " ";
          document.getElementById("submit-button").style.display = "none";
          var english_sen_selection='<select name="eng-sentences" id="eng-sen" onchange="display_sentence_table(this.value)"><option value="null">----Select Sentence----</option><option value="Esen1">The child liked the chocolate.</option><option value="Esen2">She was stopped by the bravest knight.</option><option value="Esen3">Mary baked a cake for his birthday</option><option value="Esen4">She decorated the cake carefully</option><option value="Esen5">Mary wore a dress with polka dots.</option>'
           
          document.getElementById("selection-list-two").innerHTML=english_sen_selection;
    }
    else if(value === "Hindi")
    {       
    	   
           value1 = value;
           j = 0;
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
		j = 0;
	  }	
	  else if(value === "Esen2")
	  {	
	  	sentence = english_sentences[1];
	  	j = 1;
	  }	
      else if(value === "Esen3")
	  {
		sentence = english_sentences[2];
		j = 2;
	  }	
	  else if(value === "Esen4")
	  {
	  	sentence = english_sentences[3];
	  	j = 3;
	  }	
      else if(value === "Esen5")
	  {
		sentence = english_sentences[4];
		j = 4;
	  }	
      
      sentence= sentence.replace("."," ");
      sentence=sentence.split(" ");
	  var col="<tr id='tablehead' style='color:brown;font-size:20px'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
	  for(var i = 0; i < sentence.length; i++){
		col = col +"<tr id='id"+i+"' style='font-size:18px;color:black;'><td>"+sentence[i]+"</td><td><select  id='posoption"+i+"' onchange='user_ans_array(this.id,this.value)'><option value='Noun'>Noun</option><option value='Pronoun'>Pronoun</option><option value='Verb'>Verb</option><option value='Adjective'>Adjective</option><option  value = 'Adverb'>Adverb</option><option value='Determiner'>Determiner</option><option value='Preposition'>Preposition</option><option value='Conjunction'>Conjunction</option><option value='Interjection'>Interjection</option></select></td><td id='img"+i+"'></td><td></td></tr>";
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
		j = 0;
	  }	
	  else if(value === "Hsen2")
	  {	
	  	sentence = hindi_sentences[1];
	  	j =1;
	  }	
      if(value === "Hsen3")
	  {
		sentence = hindi_sentences[2];
		j = 2;
	  }	
	  else if(value === "Hsen4")
	  {
	  	sentence = hindi_sentences[3];
	  	j=3;
	  }	
      if(value === "Hsen5")
	  {
		sentence = hindi_sentences[4];
		j = 4;
	  }	
      
      sentence= sentence.replace("."," ");
      sentence=sentence.split(" ");
	  var col="<tr id= 'tablehead' style='color:brown;font-size:20px'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
	  for(var i = 0; i < sentence.length; i++){
		col = col +"<tr id='id"+i+"' style='font-size:18px;color:black;'><td>"+sentence[i]+"</td><td><select  id='posoption"+i+"' onchange='user_ans_array(this.id,this.value)'><option value = 'Noun'>Noun</option><option value='Pronoun'>Pronoun</option><option value='Verb'>Verb</option><option value='Adjective'>Adjective</option><option  value = 'Adverb'>Adverb</option><option value='Determiner'>Determiner</option><option value='Postposition'>Postposition</option><option value='Conjunction'>Conjunction</option><option value='Interjection'>Interjection</option></select></td><td id='img"+i+"'></td><td></td></tr>";
	  
	   user_pos_values[i] = "Noun"; //setting default user pos values as Noun

	   }
     
      document.getElementById("table-disp").innerHTML = col;
      document.getElementById("submit-button").style.display ="inline"; //displaying submit button below table
     

 	}
 	
    //console.log(user_pos_values);
    document.getElementById("submit-button").onclick = function(){ compare_user_and_ans_pos()};
 }


 function user_ans_array(id,value)
 {
    switch(id)
    {
       case 'posoption0' : user_pos_values[0] = value; 
                           break;
       case 'posoption1' : user_pos_values[1] = value;
                           break;
       case 'posoption2' : user_pos_values[2] = value;
                           break;
       case 'posoption3' : user_pos_values[3] = value;
                           break;
       case 'posoption4' : user_pos_values[4] = value;
                           break;
       case 'posoption5' : user_pos_values[5] = value;
                           break;
       case 'posoption6' : user_pos_values[6] = value;
    }

 }

function compare_user_and_ans_pos()
{

   //console.log(user_pos_values);
   if(value1 == "English")
   {
        for(var i =0;i<sentence.length;i++)
       {
           var docx = nlp(sentence[i]);
           var noun_word = docx.nouns().text();
           var pronoun_word = docx.pronouns().text();
           var verb_word  = docx.verbs().text();
           var adjective_word = docx.adjectives().text();
           var adverb_word = docx.adverbs().text();
           var preposition_word = docx.prepositions().text();
           var conjunction_word = docx.conjunctions().text();


		if(noun_word!="")
		{
			english_actual_ans_values[i]="Noun";
		}
		else if(pronoun_word!="")
		{
			english_actual_ans_values[i]="Pronoun";
		}
		else if(verb_word!="")
		{
			english_actual_ans_values[i]="Verb";
		}
		else if(adjective_word!="")
		{	
			english_actual_ans_values[i]="Adjective";
		}
		else if(adverb_word!="")
		{	
			english_actual_ans_values[i]="Adverb";
		}	
		else if(preposition_word!="")
		{	
			english_actual_ans_values[i]="Preposition";
		}	
		else if(conjunction_word!="")
		{	
			english_actual_ans_values[i]="Conjunction";
		}	
		else
		{	
			english_actual_ans_values[i]="Determiner";
        } 
          if(sentence[i]==="bravest")
          {
             english_actual_ans_values[i]="Adjective";
          }
          if(sentence[i]==="dress")
          {
        	 english_actual_ans_values[i] = "Noun";
          }

        
      }

        console.log(english_actual_ans_values);
        for(var i=0;i<sentence.length;i++)
        {
        	var image = " ";
           if(user_pos_values[i]==english_actual_ans_values[i])
           {
               image = "img"+i;
               document.getElementById(image).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/right.png" width="50px" height="50px">';

           }
           else
           {
               image = "img"+i;
               document.getElementById(image).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/wrong.png" width="50px" height="50px">';        

                  
           }

        }

   }
   else if(value1 == "Hindi")
   {
       
       hindi_actual_ans_values = [["Noun","Postposition","Noun","Postposition","Postposition","Noun","Verb"],["Adjective","Noun","Noun","Adverb","Verb"],["Noun","Postposition","Noun","Adjective","Verb","Verb"],["Interjection","Pronoun","Adjective","Verb"],["Noun","Postposition","Noun","Verb","Verb"]];

      for(var i =0;i<sentence.length;i++)
      {
           var image = " "
       if(user_pos_values[i]==hindi_actual_ans_values[j][i])
           {
               image = "img"+i;
               console.log(image);
               document.getElementById(image).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/right.png" width="30px" height="30px">';

           }
           else
           {
               var image = "img"+i;
               console.log(image);
               document.getElementById(image).innerHTML='<img src="http://cl-iiith.vlabs.ac.in/exp7/wrong.png" width="30px" height="30px">';        
           }
      } 
  }




} 
