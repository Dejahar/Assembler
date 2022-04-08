const exercise16 = require('../16-exercise');

describe('16-exercise', () => {
    test('implement the game rock, paper, scissors', () => {
        let rock = 'rock';
        let paper = 'paper';
        let scissors = 'scissors';

        // Return these variables
        let userWins = 'User wins!';
        let computerWins = 'Computer wins!';
        let sameChoice = 'Play again!';

        expect(exercise16(rock, rock)).toBe(sameChoice);
        expect(exercise16(paper, paper)).toBe(sameChoice);
        expect(exercise16(scissors, scissors)).toBe(sameChoice);

        // 1. rock wins against scissors
        // 2. scissors win against paper
        // 3. paper wins against rock
        expect(exercise16(rock, scissors)).toBe(userWins);
        expect(exercise16(scissors, rock)).toBe(computerWins);
        expect(exercise16(scissors, paper)).toBe(userWins);
        expect(exercise16(paper, scissors)).toBe(computerWins);
        expect(exercise16(paper, rock)).toBe(userWins);
        expect(exercise16(rock, paper)).toBe(computerWins);
    });
});
