class Solution: 
    def select(self, arr, i):
        # code here
        selected=i
        for j in range(i+1,len(arr)):
            if arr[j]<arr[selected]:
                selected=j
        return selected
    
    def selectionSort(self, arr,n):
        #code here
        for i in range(n-1):
            s=self.select(arr,i)
            if s!=i:
                arr[i],arr[s]=arr[s],arr[i]
