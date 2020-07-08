import NewTask from './NewTask';
import React from 'react';
import {shallow} from 'enzyme';

describe('NewTask',()=>{
    it("should render a label with New Task", ()=>{
        const newTask = shallow(<NewTask />);
        const label = newTask.find('label');
        expect(label.length).toBe(1);
        expect(label.text()).toContain('New Task:');
    });
    it("should trigger handleClick", ()=>{
        let hasBeenCalled = false;
        const handleClick=()=>{hasBeenCalled = true;}
        const newTask = shallow(<NewTask handleClick={handleClick} />);
        newTask.find('button').simulate('click');
        expect(hasBeenCalled).toBe(true);
    })
    it("should get data from server",(done)=>{
        const newTask = shallow(<NewTask />);
        setTimeout(()=>{
            expect(newTask.state().data).toBe('data du serveur');
            done();
        }, 2000);
    })
})