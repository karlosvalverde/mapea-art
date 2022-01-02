<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    // private $apiToken;
    // public function __construct()
    // {
    //  $this->apiToken = uniqid(base64_encode(Str::random(40)));
    // }

   /**
    *
    * @return \Illuminate\Http\Response
    */

    public function test(Request $req) {

        $user = User::where("name", $req->name)->first();
        if(!$user) {
            return ["error" => "User name or password is not matched!"];
        }
        return $user;
    }

    public function onLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>"Login was not successful!"], 401);
        }

        $user = User::where("name",$request->name)->get();
        if($user->count()>0){
            return response()->json(array("success"=>1,"data"=>$user[0]));
        }
        return response()->json(['error'=>"Login was not successful!"], 401);
    }

    public function login(Request $request){
        //User check
        if(Auth::attempt(['name' => $request->name, 'password' => $request->password])){
            $user = Auth::user();

        //Setting login response
        $success['token'] = $this->apiToken;
        $success['name'] =  $user->name;
            return response()->json([
                'status' => 'success',
                'data' => $success
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }

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

    // function login(Request $req)
    // {
    //     $name =  $req->input('name');
    //     $password = $req->input('password');

    //     $user = DB::table('users')->where('name',$name)->first();
    //     if(!Hash::check($password, $user->password))
    //     {
    //         echo "Not Matched";
    //     }
    //     else
    //     {
    //         //$user = DB::table('users')->where('name',$name)->first();
    //        echo $user->name;
    //     }
    // }
}
