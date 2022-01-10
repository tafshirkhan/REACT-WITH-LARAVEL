<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Information;

class InformationController extends Controller
{
    public function AllSelect(){
        $result = Information::all();
        return $result;
    }

    public function AllDetails(){
        $data = Information::all();

        return view('Backend.information_details',compact('data'));
    }

    public function AddDetails(){

        return view('Backend.add_details');
    }

    public function StoreDetails(Request $req){
        Information::insert([
            'about'=>$req->about,
            'refund_policy'=>$req->refund_policy,
            'terms'=>$req->terms,
            'privacy'=>$req->privacy,
        ]);

        $alert = array(
         'message'=>"Inserted successful",
         'alert-type'=>'info'
        );

        return Redirect()->route('all.details')->with($alert);
    }

   public function EditDetails($id){
       $data = Information::findOrFail($id);

       return view('Backend.edit_details',compact('data'));

   }

   public function UpdateDetails(Request $req,$id){
      
    Information::findOrFail($id)->update([
            'about'=>$req->about,
            'refund_policy'=>$req->refund_policy,
            'terms'=>$req->terms,
            'privacy'=>$req->privacy,
        ]);

        $alert = array(
         'message'=>"Updated successful",
         'alert-type'=>'success'
        );

        return Redirect()->route('all.details')->with($alert);

   }

   public function DeleteDetails($id){
       $data = Information::findOrFail($id)->delete();

       $alert = array(
           'message'=>"Deleted successful",
           'alert-type'=>"warning"
       );

       return Redirect()->back()->with($alert);
   }
}
