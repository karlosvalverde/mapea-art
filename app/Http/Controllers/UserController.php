<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Validator;
use Redirect,Response,File;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

// use Auth;

class UserController extends Controller
{
    // private $apiToken;
    // public function __construct()
    // {
    //  $this->apiToken = uniqid(base64_encode(Str::random(40)));
    // }

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
        $email =  $req->input('email');
        $password = $req->input('password');

        $user = DB::table('users')->where('email',$email)->first();
        if(!Hash::check($password, $user->password))
        {
            echo "Not Matched";
        }
        else
        {
            //$user = DB::table('users')->where('email',$email)->first();
           echo $user->email;
        }
    }

    // protected $user;

    // public function __construct() {

    //     $this->middleware("auth:api", ["except" => ["login", "register"]]);
    //     $this->user = new User;
    // }

    // public function register(Request $request) {

    //     $validator = Validator::make($request->all(), [
    //         'name' => 'required|string',
    //         'email' => 'required|string|unique:users',
    //         'password' => 'required|min:6|confirmed',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => $validator->messages()->toArray()
    //         ], 500);
    //     }

    //     $data = [
    //         "name" => $request->name,
    //         "email" => $request->email,
    //         "password" => Hash::make($request->password)
    //     ];

    //     $this->user->create($data);

    //     $responseMessage = "Registration Successful";

    //     return response()->json([
    //         'success' => true,
    //         'message' => $responseMessage
    //     ], 200);
    // }

    // public function login(Request $request) {

    //     $validator = Validator::make($request->all(), [
    //         'email' => 'required|string',
    //         'password' => 'required|min:6',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => $validator->messages()->toArray()
    //         ], 500);
    //     }

    //     $credentials = $request->only(["email", "password"]);
    //     $user = User::where('email',$credentials['email'])->first();

    //     if ($user) {
    //         if (!auth()->attempt($credentials)) {
    //             $responseMessage = "Invalid username or password";
    //             return response()->json([
    //                 "success" => false,
    //                 "message" => $responseMessage,
    //                 "error" => $responseMessage
    //             ], 422);
    //         }
    //     $accessToken = auth()->user()->createToken('authToken')->accessToken;
    //     $responseMessage = "Login Successful";

    //     return $this->respondWithToken($accessToken,$responseMessage,auth()->user());

    //     } else {
    //         $responseMessage = "Sorry, this user does not exist";
    //         return response()->json([
    //             "success" => false,
    //             "message" => $responseMessage,
    //             "error" => $responseMessage
    //         ], 422);
    //     }
    // }

    // public function viewProfile() {

    //     $responseMessage = "user profile";
    //     $data = Auth::guard("api")->user();

    //     return response()->json([
    //         "success" => true,
    //         "message" => $responseMessage,
    //         "data" => $data
    //     ], 200);
    // }

    // public function logout() {

    //     $user = Auth::guard("api")->user()->token();
    //     $user->revoke();
    //     $responseMessage = "successfully logged out";

    //     return response()->json([
    //         'success' => true,
    //         'message' => $responseMessage
    //     ], 200);
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

    // public function login(Request $request){
    //     //User check
    //     if(Auth::attempt(['name' => $request->name, 'password' => $request->password])){
    //         $user = Auth::user();

    //     //Setting login response
    //     $success['token'] = $this->apiToken;
    //     $success['name'] =  $user->name;
    //         return response()->json([
    //             'status' => 'success',
    //             'data' => $success
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => 'error',
    //             'data' => 'Unauthorized Access'
    //         ]);
    //     }
    // }

    // function register(Request $req)
    // {
    //     $name = $req->input('name');
    //     $email = $req->input('email');
    //     $password = Hash::make($req->input('password'));
    //     DB::table('users')->insert([
    //         'name' =>   $name,
    //         'email' =>  $email ,
    //         'password'=> $password
    //       ]);
    // }

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
