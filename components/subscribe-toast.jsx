 'use client'
 
 import { toast } from '@/hooks/use-toast'
 import { CheckCircle, AlertTriangle } from 'lucide-react'
 
 export function showSubscribeToast(status, email) {
   if (status === 'success') {
     toast({
       title: (
         <div className="flex items-center gap-2">
           <CheckCircle className="h-5 w-5 text-green-600" />
           <span>Subscribed</span>
         </div>
       ),
       description: `Updates will be sent to ${email}`,
       duration: 4000,
     })
   } else {
     toast({
       title: (
         <div className="flex items-center gap-2">
           <AlertTriangle className="h-5 w-5 text-red-600" />
           <span>Invalid email</span>
         </div>
       ),
       description: 'Please enter a valid email address',
       variant: 'destructive',
       duration: 5000,
     })
   }
 }
