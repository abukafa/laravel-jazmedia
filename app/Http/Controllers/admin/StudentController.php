<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\AdminStudent as Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'nis' => 'required|unique:students,nis',
            'name' => 'required',
            'nickname' => 'required|unique:students,nickname',
            'gender' => 'required'
        ]);

        $student = Student::create($fields);

        return $student;
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return $student;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        $fields = $request->validate([
            'name' => 'required',
            'nickname' => 'required|unique:students,nickname',
            'gender' => 'required'
        ]);

        $student->update($fields);

        return $student;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();

        return ['message' => 'Data telah dihapus'];
    }
}
