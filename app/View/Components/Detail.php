<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Detail extends Component
{

    public $researcher;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($researcher)
    {
        $this->researcher = $researcher;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.detail');
    }
}
