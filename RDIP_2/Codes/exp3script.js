//corpus requirements

var english_sentences=['The child liked the chocolate','She was stopped by the bravest knight','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots'];

var hindi_sentences=['राम ने सीता के लिए फल तोड़ा','छोटे बच्चे पाठशाला जल्दी आयेंगे','मेहनत का फल मीठा होता है','वाह वह खूबसूरत है','पेड़ से पत्ते गिर गए'];

//added sellection lists

 function expdisp(value)
 {

    if(value === "null"){
        alert('Select Language');
        return false;
    }
    else if(value === "English" )
    {
           
          var english_sen_selection='<select name="eng-sentences" id="eng-sen"><option value="null">----Select Sentence----</option><option value="Esen1">The child liked the chocolate.</option><option value="Esen2">She was stopped by the bravest knight.</option><option value="Esen3">Mary baked a cake for his birthday</option><option value="Esen4">She decorated the cake carefully</option><option value="Esen5">Mary wore a dress with polka dots.</option>'
           
          document.getElementById("selection-list-two").innerHTML=english_sen_selection;
    }
    else if(value === "Hindi")
    {
            var hindi_sen_selection='<select name="hindi-sentences" id="hin-sen"><option value="null">----Select Sentence----</option><option value="Hsen1">राम ने सीता के लिए फल तोड़ा।</option><option value="Hsen2">छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value="Hsen3">मेहनत का फल मीठा होता है।</option><option value="Hsen4">वाह! वह खूबसूरत है।</option><option value="Hsen5">पेड़ से पत्ते गिर गए।</option>';
            
            document.getElementById("selection-list-two").innerHTML=hindi_sen_selection;  

    }       

 }