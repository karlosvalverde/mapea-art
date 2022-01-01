<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function register(Request $req)
    {
        $name = $req->input('name');
        $email = $req->input('email');
        $password = Hash::make($req->input('password'));
        DB::table('users')->insert([
            'name' =>   $name,
            'email' =>  $email ,
            'password'=> $password
          ]);
    }

    function login(Request $req)
    {
        $name =  $req->input('name');
        $password = $req->input('password');

        $user = DB::table('users')->where('name',$name)->first();
        if(!Hash::check($password, $user->password))
        {
            echo "Not Matched";
        }
        else
        {
            //$user = DB::table('users')->where('name',$name)->first();
           echo $user->name;
        }
    }
}
