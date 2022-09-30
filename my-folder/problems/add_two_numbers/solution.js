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
    const outputListNode = new ListNode(0)
    let e = outputListNode
    let rem = 0

    while(l1 || l2 || rem > 0) {
        let newVal = 0
        if (l1) {
            newVal = l1.val + newVal
            l1 = l1.next
        }
        if (l2) {
            newVal = l2.val + newVal
            l2 = l2.next
        }
        if (rem) {
            newVal = rem + newVal
        }
        // console.log(newVal)
        if (newVal >= 10) {
            rem = 1
            newVal -= 10
            e.next = new ListNode(newVal)
            e = e.next
        } else {
            rem = 0
            e.next = new ListNode(newVal)
            e = e.next
        }
    }
    return outputListNode.next
};