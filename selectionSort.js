class Solution
{
 select(arr,i){
     // code here such that selectionSort() sorts arr[]
     let selected=i;
     for(let j=i+1;j<arr.length;j++){
         if(arr[j]<arr[selected]){
             selected=j;
         }
     }
     return selected;
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   //code here
   for(let i=0;i<n;i++){
       let selectedIndex=this.select(arr,i);
       if(selectedIndex!==i){
           [arr[selectedIndex],arr[i]]=[arr[i],arr[selectedIndex]];
       }
        
   }
  }
}
