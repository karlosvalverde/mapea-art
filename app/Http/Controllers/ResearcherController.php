<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Researcher;

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

        return view('app', ['researchers' => $researchers]);
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

    public function search(Request $request)
    {
        // Get the search value from the request
        $search = $request->input('search');

        // Search in the name column
        $researchers = Researcher::query()
            ->where('name', 'LIKE', "%{$search}%")
            ->get();

        return view('app', compact('researchers'));

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
        return view('researchers.show', ['researcher' => $researcher]);
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