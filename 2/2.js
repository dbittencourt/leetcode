/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var number1 = 0;
    var result = new ListNode();
    var tempResult = result;
    while(true){
        var acc = tempResult.val;
        if(l1){
            acc += l1.val;
            l1 = l1.next;
        }
        
        if(l2){
            acc += l2.val;
            l2 = l2.next;       
        }

        var remainder = acc % 10;
        tempResult.val = acc < 10 ? acc : remainder;
        
        if (acc >= 10 || l1 || l2){
            tempResult.next = new ListNode();
            tempResult = tempResult.next;
        }
        
        if (acc >= 10){
            tempResult.val = 1;
        }
        
        if(!l1 && !l2) {
            break;
        }
    }
    
    return result;
};
