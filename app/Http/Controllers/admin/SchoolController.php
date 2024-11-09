<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AdminSchool as School;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return School::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required'
        ]);

        $school = School::create($fields);

        return $school;
    }

    /**
     * Display the specified resource.
     */
    public function show(School $school)
    {
        return $school;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, School $school)
    {
        $fields = $request->validate([
            'name' => 'required'
        ]);

        $school->update($fields);

        return $school;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(School $school)
    {
        $school->delete();

        return ['message', 'Data telah dihapus'];
    }
}
