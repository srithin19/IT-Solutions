# Web3Forms Setup Guide - Simple & Quick ⚡

Get your contact form working in **2 minutes**!

## Step 1: Get Your Access Key (FREE)

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address: **sales@nslogix-it.com**
3. Click **"Create Access Key"**
4. Check your email inbox
5. Copy the **Access Key** from the email

That's it! No sign-up, no password, no templates needed.

## Step 2: Add Access Key to .env File

1. Open the `.env` file in your project
2. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-actual-access-key-here
```

3. Save the file

## Step 3: Restart Development Server

```bash
# Stop the server (Ctrl+C), then:
npm run dev
```

## Step 4: Test Your Form

1. Go to http://localhost:5174/contact
2. Fill out the form with all fields:
   - Name
   - Email
   - Phone
   - Company
   - Subject
   - Message
3. Click "Send Message"
4. Check your inbox: **sales@nslogix-it.com**

## ✅ What You Get

All form submissions will be sent to **sales@nslogix-it.com** with:

- ✅ Name
- ✅ Company
- ✅ Email (with reply-to set automatically)
- ✅ Phone
- ✅ Subject
- ✅ Message
- ✅ Formatted and structured

## 📊 Free Tier Limits

- **250 submissions per month** (FREE forever)
- No credit card required
- No templates to configure
- No complex setup

Perfect for small to medium businesses!

## 🔒 Security

- Your access key is already in `.gitignore`
- Access key only allows sending emails, not receiving
- Spam protection built-in
- reCAPTCHA support available

## 🚀 Advanced Features (Optional)

Once you have your access key, you can:

- Add custom redirects after submission
- Enable email notifications
- Add file uploads
- Customize email templates
- Add webhooks

Visit the [Web3Forms Dashboard](https://web3forms.com/dashboard) to manage these.

## 📧 Email Format

Your submissions will look like this:

```
From: NSLogix IT Solutions Contact Form
Reply-To: customer@example.com

Name: John Doe
Email: customer@example.com
Phone: +971 50 123 4567
Company: ABC Corporation
Subject: Interested in IT Consultancy

Message:
We are looking for IT consulting services for our company.
Please get back to us as soon as possible.
```

## ❓ Troubleshooting

### Form shows "not configured" error:

- Make sure you added your access key to `.env`
- Restart the dev server after updating `.env`
- Check that the key doesn't have quotes around it

### Emails not arriving:

- Check your spam folder
- Verify the email address in Web3Forms dashboard
- Make sure you're using the correct access key

### Need help?

- Visit [Web3Forms Documentation](https://docs.web3forms.com/)
- Contact Web3Forms support

## 🎉 That's It!

Your contact form is now fully functional and will deliver all messages directly to your inbox with all the details structured and ready to respond!
