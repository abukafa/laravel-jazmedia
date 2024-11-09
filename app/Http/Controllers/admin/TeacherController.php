<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AdminTeacher as Teacher;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Teacher::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'nig' => 'required|unique:teachers,nis',
            'name' => 'required',
            'nickname' => 'required|unique:teachers,nickname',
            'gender' => 'required'
        ]);

        $teacher = Teacher::create($fields);

        return $teacher;
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
        return $teacher;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teacher $teacher)
    {
        $fields = $request->validate([
            'name' => 'required',
            'nickname' => 'required|unique:teachers,nickname',
            'gender' => 'required'
        ]);

        $teacher->update($fields);

        return $teacher;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        $teacher->delete();

        return ['message' => 'Data telah dihapus'];
    }
}
