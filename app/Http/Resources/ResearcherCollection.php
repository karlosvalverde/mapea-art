<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ResearcherCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "state" => $this->state,
            "contact" => $this->contact,
            "web" => $this->web,
            "university" => $this->university,
            "role" => $this->role,
            "research_field" => $this->research_field,
            "keywords" => $this->keywords,
        ];
    }
}
