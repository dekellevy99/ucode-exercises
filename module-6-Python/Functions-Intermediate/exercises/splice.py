def set_start_index(start, length):
    if start > length:
        start = length
    
    if start < 0:
        start = max(0, length + start)
    return start


def set_delete_count(delete_count, start, length):
    if delete_count is None or delete_count > length - start:
        delete_count = length - start
    
    if delete_count < 0:
        delete_count = 0

    return delete_count

def splice(arr, start, delete_count = None, *items):
    start = set_start_index(start, len(arr))
    delete_count = set_delete_count(delete_count, start, len(arr))
 
    deleted_elements = []
    result_arr = []
    for i in range(start):
        result_arr.append(arr[i])
    
    for i in range(start, start + delete_count):
        deleted_elements.append(arr[i])
    
    for item in items:
        result_arr.append(item)

    for i in range(start + delete_count, len(arr)):
        result_arr.append(arr[i])

    return result_arr, deleted_elements


# def splice(arr, start, delete_count = None, *items):
#     start = set_start_index(start, len(arr))
#     delete_count = set_delete_count(delete_count, start, len(arr))
 
#     deleted_elements = []
#     result_arr = []

#     result_arr.extend(arr[:start])
#     deleted_elements.extend(arr[start: start + delete_count])
#     result_arr.extend(items)
#     result_arr.extend(arr[start + delete_count:])

#     return result_arr, deleted_elements


# ================== TESTS ==================

# remove 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 1)
assert nums == [2, 3]

# add 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 0, 0)
assert nums == [0, 1, 2, 3]

# add 2 elements
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 0, -1, 0)
assert nums == [-1, 0, 1, 2, 3]

# replace 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 1, 1, 55)
assert nums == [1, 55, 3]

# delete all elements from index to end
nums = [1, 2, 3, 4, 5]
nums, deleted = splice(nums, 1)
assert nums == [1]

# returns list of deleted elements as the second parameter
nums = [1, 2, 3]
nums, deleted = splice(nums, 1)
assert deleted == [2, 3]

# returns an list of the deleted element (1 element)
nums = [1, 2, 3]
nums, deleted = splice(nums,1, 1)
assert deleted == [2]

# returns an empty list when no elements are deleted
nums = [1, 2, 3]
nums, deleted = splice(nums,1, 0, 5)
assert deleted == []

# delete all but 2 last ones
nums = [1, 2, 3, 4]
nums, deleted = splice(nums, -2)
assert deleted == [3, 4] 