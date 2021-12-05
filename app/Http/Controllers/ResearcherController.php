<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Query\Builder;
use App\Models\Researcher;
use Spatie\Searchable\Search;

class ResearcherController extends Controller
{
    /**
        * Display a listing of the resource.
        *
        * @return Response
        */
    // public function index(Request $request, Researcher $researcher)
    public function index(Request $request, Researcher $researcher)
    {
        // Get all researchers, with a 25 entry pagination
        // $allResearchers = $task->whereIn('user_id', $request->user())->with('user');
        $researchers = $researcher->orderBy('id', 'asc')->paginate(25);

        // return json response
        // return response()->json([
        //     'researchers' => $researchers,
        // ]);

        return view('layouts.app', ['researchers' => $researchers]);
    }

    public function api(Request $request, Researcher $researcher)
    {
        // Get all researchers, with a 25 entry pagination
        // $allResearchers = $task->whereIn('user_id', $request->user())->with('user');
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

    public function search(Researcher $researcher)
    // public function search(Request $request)
    // public function search(Request $request, $search = "")
    {
        // $result = Researcher::when()
        // where("state", "LIKE", "%" . $search . "%")->get();
        // $name = Researcher::where("name", "LIKE", "%" . $search . "%")->get();

        // if (count($result)) {
        //     return response()->json($result);
        // } else {
        //     return response()->json(["Result" => "No data - Not found"], 404);
        // }
        // // Get the search value from the request
        // $search = $request->input('search');

        // // Search in the name column
        // $researchers = Researcher::query()
        //     ->where('name', 'LIKE', "%{$search}%")
        //     ->get();

        // return view('layouts.app', compact('researchers'));
        // if ($request->wantsJson()) {
        //     // return response()-json(Researcher::search($search));
        //     return response()-json(Researcher::whereFuzzy("name", $search)->first()->name);
        // } else {
        //     abort(403);
        // }

        // $searchResults = (new Search())
        //     ->registerModel(Researcher::class, 'name')
        //     ->perform($request->input('query'));

        $researchers = $researcher->get();

        // return json response
        // return response()->json([
        //     'researchers' => $researchers,
        // ]);

        return view('researchers.search', ['researchers' => $researchers]);


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
    public function store()
    {
        //
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
        // return view('components.detail', [$researcher => "researcher"]);
        return view('researchers.show', ["researcher" => $researcher]);
            // ->with('researcher', $researcher);
    }

    /**
        * Show the form for editing the specified resource.
        *
        * @param  int  $id
        * @return Response
        */
    public function edit($id)
    {
        //
    }

    /**
        * Update the specified resource in storage.
        *
        * @param  int  $id
        * @return Response
        */
    public function update($id)
    {
        //
    }

    /**
        * Remove the specified resource from storage.
        *
        * @param  int  $id
        * @return Response
        */
    public function destroy($id)
    {
        //
    }
}
