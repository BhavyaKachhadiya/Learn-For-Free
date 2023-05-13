import tkinter as tk
import json

class App:
    def __init__(self, master):
        self.master = master
        master.title("JSON Editor")
        
        # Create labels and entry fields
        self.label_id = tk.Label(master, text="ID:")
        self.entry_id = tk.Entry(master)
        self.label_name = tk.Label(master, text="Name:")
        self.entry_name = tk.Entry(master)
        self.label_url = tk.Label(master, text="URL:")
        self.entry_url = tk.Entry(master)
        self.label_img = tk.Label(master, text="Image URL:")
        self.entry_img = tk.Entry(master)
        
        # Create submit button
        self.submit_button = tk.Button(master, text="Submit", command=self.submit)
        
        # Layout labels and entry fields
        self.label_id.grid(row=0, column=0)
        self.entry_id.grid(row=0, column=1)
        self.label_name.grid(row=1, column=0)
        self.entry_name.grid(row=1, column=1)
        self.label_url.grid(row=2, column=0)
        self.entry_url.grid(row=2, column=1)
        self.label_img.grid(row=3, column=0)
        self.entry_img.grid(row=3, column=1)
        self.submit_button.grid(row=4, column=0, columnspan=2)
        
    def submit(self):
        # Get values from entry fields
        id_val = self.entry_id.get()
        name_val = self.entry_name.get()
        url_val = self.entry_url.get()
        img_val = self.entry_img.get()
        
        # Create new dictionary with values
        new_data = {"id": id_val, "name": name_val, "url": url_val, "img": img_val}
        
        # Append new dictionary to JSON file
        with open('src/app/API/WebDev.json', 'r') as f:
            json_data = json.load(f)
            json_data.append(new_data)
        with open('src/app/API/WebDev.json', 'w') as f:
            json.dump(json_data, f, indent=4)
        
        # Clear entry fields
        self.entry_id.delete(0, 'end')
        self.entry_name.delete(0, 'end')
        self.entry_url.delete(0, 'end')
        self.entry_img.delete(0, 'end')

root = tk.Tk()
app = App(root)
root.mainloop()
