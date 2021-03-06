<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Query\Builder;
use App\Models\Researcher;

class ResearcherController extends Controller
{

    // apply auth middleware so only authenticated users have access
	// public function __construct() {
	// 	$this->middleware('auth');
	// }
    /**
        * Display a listing of the resource.
        *
        * @return Response
        */
    // public function index(Request $request, Researcher $researcher)
    // public function index(Request $request, Researcher $researcher)
    // {
    //     // Get all researchers, with a 25 entry pagination
    //     // $allResearchers = $task->whereIn('user_id', $request->user())->with('user');
    //     $researchers = $researcher->orderBy('id', 'asc')->get();

    //     // return json response
    //     return response()->json([
    //         'researchers' => $researchers,
    //     ]);

    //     // return view('layouts.app', ['researchers' => $researchers]);
    // }

    public function index(Request $request, Researcher $researcher)
    {
        $researchers = $researcher->orderBy('id', 'asc')->get();

         // return json response
         return response()->json([
             'researchers' => $researchers,
         ]);
    }

    // public function index(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         "name" => ["required"],
    //         "fetchCached" => ["boolean"]
    //     ]);

    //     $fetchCached = $validatedData["fetchCached"];
    //     $name = $validatedData["name"];

    //     if ($fetchCached) {
    //         return $this->fetchFromCache($name);
    //     } else {
    //         return $this->fetchFromDB($name);
    //     }
    // }

    // public function fetchFromDB($name)
    // {
    //     $start_time = now();
    //     $researchers = Researcher::where("name", "LIKE", "%{$name}%")->get();
    //     $finish_time = now();

    //     return response()->json([
    //         "data" => [
    //             "researchers" => $researchers,
    //             "duration_in_milliseconds" => $finish_time->diffInMilliseconds($start_time)
    //         ],
    //     ]);
    // }

    public function api(Researcher $researcher)
    {
        // Get all researchers, with a 25 entry pagination
        $researchers = $researcher->orderBy('id', 'asc')->paginate(25);

        // return json response
        return response()->json([
            'researchers' => $researchers,
        ]);
    }

    public function searchByName($search)
    {
        $result = Researcher::where("name", "LIKE", "%" . $search . "%")->get();

        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(["Result" => "No data - Not found"], 404);
        }
    }

    public function searchByState($search)
    {
        $result = Researcher::where("state", "LIKE", "%" . $search . "%")->get();

        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(["Result" => "No data - Not found"], 404);
        }
    }

    public function searchByUniversity($search)
    {
        $result = Researcher::where("university", "LIKE", "%" . $search . "%")->get();

        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(["Result" => "No data - Not found"], 404);
        }
    }

    public function searchByRole($search)
    {
        $result = Researcher::where("role", "LIKE", "%" . $search . "%")->get();

        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(["Result" => "No data - Not found"], 404);
        }
    }

    public function searchByResearchField($search)
    {
        $result = Researcher::where("research_field", "LIKE", "%" . $search . "%")->get();

        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(["Result" => "No data - Not found"], 404);
        }
    }

    public function searchByKeywords($search)
    {
        $result = Researcher::where("keywords", "LIKE", "%" . $search . "%")->get();

        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(["Result" => "No data - Not found"], 404);
        }
    }

    // public function search(Researcher $researcher)
    // // public function search(Request $request)
    // // public function search(Request $request, $search = "")
    // {
    //     // $result = Researcher::when()
    //     // where("state", "LIKE", "%" . $search . "%")->get();
    //     // $name = Researcher::where("name", "LIKE", "%" . $search . "%")->get();

    //     // if (count($result)) {
    //     //     return response()->json($result);
    //     // } else {
    //     //     return response()->json(["Result" => "No data - Not found"], 404);
    //     // }
    //     // // Get the search value from the request
    //     // $search = $request->input('search');

    //     // // Search in the name column
    //     // $researchers = Researcher::query()
    //     //     ->where('name', 'LIKE', "%{$search}%")
    //     //     ->get();

    //     // return view('layouts.app', compact('researchers'));
    //     // if ($request->wantsJson()) {
    //     //     // return response()-json(Researcher::search($search));
    //     //     return response()-json(Researcher::whereFuzzy("name", $search)->first()->name);
    //     // } else {
    //     //     abort(403);
    //     // }

    //     // $searchResults = (new Search())
    //     //     ->registerModel(Researcher::class, 'name')
    //     //     ->perform($request->input('query'));

    //     $researchers = $researcher->get();

    //     // return json response
    //     // return response()->json([
    //     //     'researchers' => $researchers,
    //     // ]);

    //     return view('researchers.search', ['researchers' => $researchers]);


    // }

    public function search(Request $request)
    {
        // Get the search value from the request
        $name = $request->input('name');
        $state = $request->input('state');
        $university = $request->input('university');
        $role = $request->input('role');
        $research_field = $request->input('research_field');
        $keywords = $request->input('keywords');

        // Search in the title and body columns from the posts table
        $researchers = Researcher::query()
            ->where('name', 'LIKE', "%{$name}%")
            ->where('state', 'LIKE', "%{$state}%")
            ->where('university', 'LIKE', "%{$university}%")
            ->where('role', 'LIKE', "%{$role}%")
            ->where('research_field', 'LIKE', "%{$research_field}%")
            ->where('keywords', 'LIKE', "%{$keywords}%")
            ->get();

        return response()->json([
            'researchers' => $researchers,
        ]);
        // Return the search view with the resluts compacted
        // return view('layouts.app', ['researchers' => $researchers]);
    }

    public function test_2(Request $request)
    {
        // Get the search value from the request
        $name = $request->input('name');
        $state = $request->input('state');
        $university = $request->input('university');
        $role = $request->input('role');
        $research_field = $request->input('research_field');
        $keywords = $request->input('keywords');

        // Search in the title and body columns from the posts table
        $researchers = Researcher::query()
            ->where('name', 'LIKE', "%{$name}%")
            ->where('state', 'LIKE', "%{$state}%")
            ->where('university', 'LIKE', "%{$university}%")
            ->where('role', 'LIKE', "%{$role}%")
            ->where('research_field', 'LIKE', "%{$research_field}%")
            ->where('keywords', 'LIKE', "%{$keywords}%")
            // ->paginate(25);
            ->get();

        // Return the search view with the resluts compacted
        return view('test', ['researchers' => $researchers]);

    }

    public function filter(Request $request, Researcher $researcher)
    {
        // Search for a researcher based on its name
        if ($request->has('name')) {
            return $researcher->where('name', $request->input('name')->get());
        }

    }

    /**
        * Show the form for creating a new resource.
        *
        * @return Response
        */
    public function create()
    {
        //
    }

    /**
        * Store a newly created resource in storage.
        *
        * @return Response
        */
    public function store(Request $request) {
        // validate
        $request->validate([
            // 'id' => 'required|unique:mapeamento,id',
            'name' => 'required',
            'state' => 'required',
            'contact' => 'nullable',
            'web' => 'required',
            'university' => 'required',
            'role' => 'required',
            'research_field' => 'required',
            'keywords' => 'required'
        ]);

        $researcher = Researcher::create($request->all());

        return response()->json([
            "message" => "researcher created!",
            "researcher" => $researcher
        ]);
    }

    /**
        * Display the specified resource.
        *
        * @param  int  $id
        * @return Response
        */
    public function show($id)
    {
        // dd($id);
        // Get researcher
        $researcher = Researcher::findOrFail($id);

        // Show the view and pass the researcher to it
        return response()->json(["researcher" => $researcher]);
        // return view('components.detail', ["researcher" => $researcher]);
        // return view('layouts.app', ["researcher" => $researcher]);
            // ->with('researcher', $researcher);
    }

    /**
        * Show the form for editing the specified resource.
        *
        * @param  int  $id
        * @return Response
        */
    public function edit($id) {

        $researcher = Researcher::findOrFail($id);

        return response()->json([
			"researcher" => $researcher,
		]);
    }

    /**
        * Update the specified resource in storage.
        *
        * @param  int  $id
        * @return Response
        */
    public function update(Request $request, $id) {

        $input = $request->all();
        $researcher = Researcher::findOrFail($id);
        $researcher->update($input);

        return response()->json($researcher->find($researcher->id));
    }

    /**
        * Remove the specified resource from storage.
        *
        * @param  int  $id
        * @return Response
        */
    public function destroy($id) {

        Researcher::findOrFail($id)->delete();

        return response()->json([
            "message" => "researcher deleted"
        ]);
    }
}
