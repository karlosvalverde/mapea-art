<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Researchers extends Component
{
    public $researchers;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($researchers)
    {
        $this->researchers = $researchers;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.researchers');
    }
}
