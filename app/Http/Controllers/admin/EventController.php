<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\AdminEvent as Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::all();

        return response()->json([
            'count' => $events->count(),
            'data' => $events
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'remark' => 'required|string|max:255',
        ]);

        $event = Event::create($fields);

        return response()->json([
            'message' => 'Event data created successfully',
            'data' => $event
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return response()->json([
            'message' => 'Event data founded',
            'data' => $event
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        $fields = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'remark' => 'required|string|max:255',
        ]);

        $event->update($fields);

        return response()->json([
            'message' => 'Event data updated successfully',
            'data' => $event
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'message' => 'Event data deleted successfully.',
            'count' => Event::count()
        ]);
    }
}
