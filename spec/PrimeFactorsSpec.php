<?php

namespace spec;

use PrimeFactors;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class PrimeFactorsSpec extends ObjectBehavior
{
    function it_returns_an_empty_for_1(){
        $this->generate(1)->shouldReturn([]);
    }

    function it_return_2_for_2(){
        $this->generate(2)->shouldReturn([2]);
    }

    function it_return_3_for_3(){
        $this->generate(3)->shouldReturn([3]);
    }

    function it_return_2_2_for_4(){
        $this->generate(4)->shouldReturn([2,2]);
    }
    
    function it_return_5_for_5(){
        $this->generate(5)->shouldReturn([5]);
    }

    function it_return_2_3_for_4(){
        $this->generate(6)->shouldReturn([2,3]);
    }

    function it_returns_2_2_5_5_for_100(){
        $this->generate(100)->shouldReturn([2,2,5,5]);
    }

}
