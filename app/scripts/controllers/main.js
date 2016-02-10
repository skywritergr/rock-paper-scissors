'use strict';

/**
 * @ngdoc function
 * @name controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('mainApp')
    .controller('MainCtrl', function($scope, $http) {
        /**
         * I would love in the future to add Lizard and Spock in the game and create
         * Rock, Paper, Scissors, Lizard, Spock. Maybe in the future.
         */
        $scope.humanChoice = 'images/paper.svg';
        $scope.computerChoice = 'images/rock.svg';
        $scope.selectedObject = '';
        $scope.wins = 0;
        $scope.loses = 0;
        $scope.ties = 0;
        
        $scope.highlight = function(obj){
            $scope.selectedObject = obj;
            play();
        }
        
        var play = function(){
            var choices = ['rock','paper','scissors'];
            var choice = Math.floor(Math.random() * 2);
            
            $scope.humanChoice = 'images/'+ $scope.selectedObject + '.svg';
            $scope.computerChoice = 'images/'+ choices[choice] + '.svg';
            
            if($scope.selectedObject === choices[choice]){
                $scope.ties++;
                return;
            } else if($scope.selectedObject === 'rock'){
                if(choices[choice] === 'scissors'){
                    $scope.wins++;
                } else {
                    $scope.loses++;
                }
            } else if($scope.selectedObject === 'paper'){
                if(choices[choice] === 'rock'){
                    $scope.wins++;
                } else {
                    $scope.loses++;
                }
            } else if($scope.selectedObject === 'scissors'){
                if(choices[choice] === 'paper'){
                    $scope.wins++;
                } else {
                    $scope.loses++;
                }
            }
        }
    });