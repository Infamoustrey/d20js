import test from 'ava';
import d20 from './index';

test('coin flip returns heads or tails', t => {
    let toss = d20.coin();
    t.true(toss == 'heads' || toss == 'tails')
});

test('name generator returns name', t => {
    let name = d20.name('egyptian');
    t.true( typeof name == 'string' && name.length > 0 )
})

test('roll 5d6', t => {
    let results = d20.roll(5, 'd6')
    t.true(
        results.every(r => {
            return r.hasOwnProperty('roll') 
            && r.hasOwnProperty('result') 
            && typeof r.roll === 'number'
            && typeof r.result === 'number'
        })
    )
})