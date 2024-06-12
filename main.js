function startClassification(){
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier=ml5.soundClassification{'(https://teachablemachine.withgoogle.com/models/1bherhays/model.json',modelready);

   }
   function modelready(){
    classifier.classify(gotResult);
   }
   functtion gotResults(error,results){
    if(error){
        console.error(error)
    }
    else
    console.log(results)
   }
}