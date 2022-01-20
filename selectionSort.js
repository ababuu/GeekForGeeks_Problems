class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
     let min=arr[i];
     let index;
     for( ; i<arr.length;i++){ 
         if(arr[i]<=min){ 
             min=arr[i]; 
             index=i;
         } 
     } 
     return index;
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   //code here
   let index;
   let temp;
   let min;
    for(let i=0; i<n; i++){ 
        index=this.select(arr,i);
        min=arr[index];
        temp=arr[i];
        arr[i]=min;
        arr[index]=temp;
  }
  return arr;
 } 
}
