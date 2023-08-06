import hashlib

def hash_text_lines(lines):
    hashed_lines = []
    for line in lines:
        # Encode the line to bytes before hashing
        line_bytes = line.encode('utf-8')
        # Calculate the MD5 hash
        md5_hash = hashlib.md5(line_bytes).hexdigest()
        hashed_lines.append(md5_hash)
    return hashed_lines

if __name__ == "__main__":
    # Example input: multiple lines of text
    input_lines = [
        "First.",
        "Second.",
        "Third.",
        "Fourth.",
        "Fifth.",
        "Sixth.",
        "Seventh.",
        "Eighth.",
        "Ninth.",
        "Tenth."
    ]

    # Hash the lines
    hashed_lines = hash_text_lines(input_lines)

    # Print the original lines and their corresponding hashes
    for i, line in enumerate(input_lines):
        print(f"Line {i+1}: {line}")
        print(f"Hashed Line {i+1}: {hashed_lines[i]}")
        print()
