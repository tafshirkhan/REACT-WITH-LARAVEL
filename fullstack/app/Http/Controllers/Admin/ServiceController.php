<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use Image;


class ServiceController extends Controller
{
    public function AllService(){
        $result = Service::latest()->get();
        return $result;

    }

    public function ViewAllService(){
        $data = Service::all();

        return view('Backend.viewall_services',compact('data'));
    }

    public function AddNewService(){
        
        return view('Backend.addnew_service');
    }

    public function ServiceStore(Request $req){
        $req->validate([
            'service_name'=>'required',
            'service_description'=>'required',
            'service_logo'=>'required'
        ],[
            'service_name'=>'Name is required',
            'service_description'=>'Description is required'
        ]);

        $image = $req->file('service_logo');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(512,512)->save('upload/service/'.$name_gen);
        $save_URL = 'http://127.0.0.1:8000/upload/service/'.$name_gen;
        Service::insert([
            'service_name'=>$req->service_name,
            'service_description'=>$req->service_description,
            'service_logo'=>$save_URL
        ]);

        $alert = array(
            'message'=>"Inserted successgul",
            'alert-type'=>'success'
        );
        return Redirect()->route('all.service')->with($alert);
    }


    public function EditService($id){
        $data = Service::findOrFail($id);

        return view('Backend.edit_service',compact('data'));
    }

    public function UpdateService(Request $req){
        $serviceId = $req->id;

        if($req->file('service_logo')){
            $image = $req->file('service_logo');
            $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(512,512)->save('upload/service/'.$name_gen);
            $save_URL = 'http://127.0.0.1:8000/upload/service/'.$name_gen;
           
            Service::findOrFail($serviceId)->update([
            'service_name'=>$req->service_name,
            'service_description'=>$req->service_description,
            'service_logo'=>$req->$save_URL
            ]);

             $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.service')->with($alert);

        }
        else{
            Service::findOrFail($serviceId)->update([
            'service_name'=>$req->service_name,
            'service_description'=>$req->service_description,
            
            ]);

             $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.service')->with($alert);
        }
        
    }

    public function DeleteService($id){
        Service::findOrFail($id)->delete();

        $alert = array(
            'message'=>"Deleted successful",
            'alert-type'=>'warning'
             );
             return Redirect()->back()->with($alert);


    }
}
